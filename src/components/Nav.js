import React from "react";

class Nav extends React.Component{
    render() {
        return(
            <div className="row m-3">
                <div className="col-lg-3 custMenu"  data-tag='home' >Home</div>
                <div className="col-lg-3 custMenu"  data-tag='gallery' >Gallery</div>
                <div className="col-lg-3 custMenu"  data-tag='execom'>Execom</div>
                <div className="col-lg-3 custMenu"  data-tag='act'>Activities</div>
            </div>
        );
    }
}

export default Nav;