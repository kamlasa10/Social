import React, {useState, useEffect} from 'react';

const ProfileStatus = ({status, setUpdateStatus}) => {

  const [editMode, setEditMode] = useState(false);
  const [statusText, setStatusText] = useState(status);

  useEffect(() => {
    setStatusText(status)
  }, [status])

  const updateStatus = (e) => {
    setStatusText(e.target.value);
  };

  const onUpdateStatusText = () => {
    setEditMode(false);
    setUpdateStatus(statusText)
  };

  return (
    <>
      {!editMode ? <div onDoubleClick={() => setEditMode(true)}>{status || 'writen you status'}</div>
        :
        <input onChange={updateStatus} autoFocus onBlur={onUpdateStatusText} placeholder="enter you status" value={statusText} required type="text"/>}
    </>
  )
};
export default ProfileStatus;