import React from 'react';

const Dashboard = (props) => {
    return (
        <div className="grid">           
            <div className="col-12 xl:col-12">
                <div className="card">
                    <h5>Dashboard</h5>      
                    <hr />              
                </div>                              
            </div>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return (prevProps.location.pathname === nextProps.location.pathname) && (prevProps.colorMode === nextProps.colorMode);
};

export default React.memo(Dashboard, comparisonFn);
