import React from "react";
import {useAuth} from "../../Authentication/AuthProvider";


export function ProfileInfo(props) {

    const { apiLink, token } = useAuth();

    const photoUpload = (e) => {
        const data = new FormData()
        data.append('file', e.target.files[0])

        fetch(`${apiLink}user/profilepicture`, {
            method: 'POST',
            headers: {
                'authorization': token,
            },
            body: data
        }).then((r) => {

        })
    }

    return (
        <>
            <div className='profileInfo'>
                <div className='profileInfoPictureContainer'>

                    <label className="profilePictureInput" htmlFor="uploadPicture">
                        <img className='profileInfoPicture' src={props.data.account.pictureUrl}/>

                        <div className='changeProfilePicture'>

                            <span className="material-symbols-outlined">file_upload</span>
                            <h5>Upload new profile picture</h5>
                        </div>
                        <input type="file" id="uploadPicture" accept="image/*" onChange={photoUpload}
                               style={{display: "none"}}/>
                    </label>
                </div>
                <div className='profileInfoFirstName'>
                    <h4>First Name</h4>
                    <h3>{props.data.account.firstName}</h3>
                </div>
                <div className='profileInfoSurname'>
                    <h4>Surname</h4>
                    <h3>{props.data.account.username}</h3>
                </div>
                <div className='profileInfoMail'>
                    <h4>Email</h4>
                    <h3>michal06@interia.eu</h3>
                </div>
                <div className='profileInfoPassword'>
                    <h4>Password</h4>
                    <h3 className='fakePassword'>*************** </h3>
                </div>
            </div>
        </>
    )
}