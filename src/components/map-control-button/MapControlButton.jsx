import React, { useRef, useState } from 'react';
import { StMapButtonBox, StSearchForm, StButton } from './MapControlButton.styles';
import { MdOutlineSearch, MdMyLocation } from 'react-icons/md';

const { kakao } = window;

const MapControlButton = ({ state, setState, currentLocation, mapRef }) => {
  const listRef = useRef();
  const [searchInput, setSearchInput] = useState('');
  const [isOpenInput, setIsOpenInput] = useState(false);

  // 키워드로 장소 겁색 및 이동
  const handleToSearch = (e) => {
    e.preventDefault();
    if (!mapRef) return;

    const ps = new kakao.maps.services.Places();

    if (!searchInput.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }

    ps.keywordSearch(searchInput, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        alert(`${searchInput}(으)로 이동합니다!`);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다.
        mapRef.current.setBounds(bounds);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    });

    setIsOpenInput(false);
  };

  return (
    <StMapButtonBox>
      <StSearchForm onSubmit={(e) => handleToSearch(e)}>
        <StButton type="button" onClick={() => setIsOpenInput(!isOpenInput)}>
          <MdOutlineSearch />
        </StButton>
        {isOpenInput && (
          <input
            type="text"
            maxLength={20}
            autoFocus
            placeholder="공유하고 싶은 장소를 검색해보세요."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        )}
      </StSearchForm>
      <ul ref={listRef}>placeList</ul>
      <StButton type="button" onClick={() => setState({ ...state, center: { ...currentLocation } })}>
        <MdMyLocation />
      </StButton>
    </StMapButtonBox>
  );
};

export default MapControlButton;