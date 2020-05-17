import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
// import Users from '../../components/Users/Users';

function UserPage() {
  return (
    <div className={styles.normal}>
      Users Page
      {/* <Users list={[]} total={10} page={1}></Users> */}
    </div>
  );
}

UserPage.propTypes = {
};

export default connect()(UserPage);


