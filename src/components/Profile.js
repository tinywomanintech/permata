import React from 'react';

export default function Profile() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Profil</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6"></div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    {/* Profile Image */}
                    <div className="card card-primary card-outline">
                      <div className="card-body box-profile">
                        <div className="text-center">
                          <form action="/accounts/edit_avatar/" id="my-awesome-dropzone" className="dropzone p-0" style={{ border: 'none', minHeight: 0 }}>
                            <center>
                              <img className="profile-user-img img-fluid img-circle m-0" id="old-avatar" src="https://i.ibb.co/Vqh8Gfs/avatar-placeholder.png" alt="User profile " />
                            </center>
                          </form>
                          <center></center>
                        </div>
                        <h3 className="profile-username text-center">John Doe</h3>
                        <p className="text-muted text-center">John Doe</p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
