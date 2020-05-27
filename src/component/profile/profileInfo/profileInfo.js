import React, {useState} from 'react';
import s from './_profileInfo.module.scss'
import Loading from "../../common/loading/loading";
import ProfileStatus from "./profileStatus";
import ProfileEditorReduxForm from "./profileEditor";

const ProfileInfo = (props) => {

  const [edit, setEdit] = useState(false);

  const updateProfile = (data) => {
    props.updateProfile(data);
    setEdit(false)
  };

  const goEditPhoto = (e) => {
    updateAvatar(e.currentTarget.files[0])
  };

  const updateAvatar = (avatar) => {
    let formData = new FormData();
    formData.append('image', avatar);
    props.updateAvatar(formData);
  };

  if(edit) return <ProfileEditorReduxForm initialValues={props.profile} onSubmit={updateProfile} />;

  return (
    <div className={s.content}>
      <div className={s.content__img}>
        <img src="https://www.condeshotels.com/files/img/small/img-web-promo-eventos-hcb-octubre-2018-1-173.jpg"
             alt="картинка"/>
      </div>
      <div className={s.profile}>
        <div className={s.profile__avatar}>
          <div>
            <div>
              {!props.isOwner && <div>
                <input id="selectFile" style={{display: 'none'}} onChange={goEditPhoto} type="file"/>
                <label htmlFor="selectFile">Изменить Аватар</label>
              </div>}
            </div>
            <img
              src={!props.profile.photos.large ? 'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png' : props.profile.photos.large}
              alt="Аватар"/>
          </div>
          <ProfileStatus setUpdateStatus={props.setUpdateStatus} status={props.status}/>
        </div>
        <div className={s.profile__content}>
          <div>
            {!props.isOwner &&
            <button onClick={() => setEdit(true)}>Edit</button>
            }
          </div>
          <b className={s.profile__name}>
            {props.profile.fullName}
          </b>
          <ul className={s.profile__data}>
            <li className={s.data__item}>
              {props.profile.aboutMe}
            </li>
            <li className={s.data__item}>
              {props.profile.lookingForAJob ? 'Я ищу работу' : 'Работа пока-что не нужна'}
            </li>
            <li className={s.data__item}>
              {props.profile.lookingForAJobDescription}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo