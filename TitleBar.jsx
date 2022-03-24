import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const TitleBar = () => {
    return ( 
            <div className="title-bar">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <h1>ONE-STOP NEWS</h1>
                            <p>All round news Aggregator</p>
                        </div>
                        <div className="col-lg-6">
                            <AvatarGroup max={5}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />

v
                            </AvatarGroup>
                        </div>

                    </div>                
                </div>
            </div>
     );
}
 
export default TitleBar;