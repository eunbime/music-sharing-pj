import React, { useState } from 'react';
import {
  StUserProfileEditModalContainer,
  StUserProfileEditModalForm,
  StFileUploadInput,
  StUserProfilePhoto,
  StLabel,
  StInput,
  StUserInteresteWrapper
} from './profile.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  isEditingUserProfile,
  editUserNickname,
  edituserIntroduction,
  addInterest,
  removeInterest
} from '../../redux/module/auth.js';
import { updateDoc, doc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../../firebase.js';

const EditProfileModal = () => {
  const [editUserIntroduction, setEditUserIntroduction] = useState('');
  const [editNickname, setEditNickname] = useState('');
  const [editUserInterest, setEditUserInterest] = useState([]);
  const dispatch = useDispatch();

  const { nickname, userInterest, userIntro, avatar } = useSelector((state) => state.auth);

  const useInterestArr = Array.from(userInterest);

  const userIntroOnChange = (e) => {
    setEditUserIntroduction(e.target.value);
  };

  const userInterestOnChange = (e) => {
    setEditUserInterest(e.target.value);
  };

  const onChangeNickname = (e) => {
    setEditNickname(e.target.value);
  };

  const cancelEditProfile = () => {
    dispatch(isEditingUserProfile(false));
  };

  const onClickEditProfile = async (id) => {
    dispatch(editUserNickname(editNickname));
    dispatch(edituserIntroduction(editUserIntroduction));
    const docRef = doc(db, 'user', 'XJnHOiQuDAeTWFlFbX5P');
    await updateDoc(docRef, {
      nickname: editNickname,
      introduce: editUserIntroduction
      // interest: arrayUnion(editUserInterest)
    });

    dispatch(isEditingUserProfile(false));
  };

  const addUserInterest = (e) => {
    e.preventDefault();
    dispatch(addInterest(editUserInterest));
  };

  const removeUserInterest = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'user', 'XJnHOiQuDAeTWFlFbX5P');
    await updateDoc(docRef, {});
  };

  return (
    <StUserProfileEditModalContainer>
      <StUserProfileEditModalForm>
        <StUserProfilePhoto
          src={avatar === null ? 'https://weimaracademy.org/wp-content/uploads/2021/08/dummy-user.png' : avatar}
        ></StUserProfilePhoto>
        {/* <StFileUploadInput type="file" /> */}
        <StLabel htmlFor=""></StLabel>
        <StInput
          type="text"
          placeholder="닉네임(최대 5-10 글자)"
          defaultValue={nickname}
          onChange={onChangeNickname}
          maxLength={10}
        />
        <StLabel htmlFor=""></StLabel>
        <StInput
          type="text"
          placeholder="한줄 소개(최대 15-25글자)"
          defaultValue={userIntro}
          onChange={userIntroOnChange}
          maxLength={25}
        />

        <StUserInteresteWrapper>
          {useInterestArr.map((item) => {
            return (
              <span>
                {item} <button onClick={removeUserInterest}>X</button>
              </span>
            );
          })}
        </StUserInteresteWrapper>

        <div>
          <StInput
            type="text"
            placeholder="관심사 입력(최대5개)"
            defaultValue={editUserInterest}
            onChange={userInterestOnChange}
          />
          <button onClick={addUserInterest}>관심사 추가</button>
        </div>
      </StUserProfileEditModalForm>
      <button onClick={cancelEditProfile}>취소</button>
      <button onClick={onClickEditProfile}>수정완료</button>
    </StUserProfileEditModalContainer>
  );
};

export default EditProfileModal;
