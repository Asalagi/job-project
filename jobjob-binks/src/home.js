import './App.css';

function Home() {
  return (
    <div className="main">
      <h1 className="title">JobJob Binks *</h1>
      <p className="second-title">Cause yousa need a job!</p>
      <div className="container">
        <div className="main-content">
          <div className="text-content">
            <h2 className="center">May the work force be with you!</h2>
            <div className="signup-container">
            <div className="signup-box">
              <h3>Sign Up</h3>
               <div className="signup-inner">
                <div className="signup-label"><label>Name</label><br/></div>
                <div className="signup-input"><input/></div>
                </div>
                <div className="signup-inner">
                <div className="signup-label"><label>Eamil</label><br/></div>
                <div className="signup-input"><input/></div>
                </div>
                <div className="signup-inner">
                <div className="signup-label"><label>Password</label><br/></div>
                <div className="signup-input"><input/></div>
                </div>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div className="bottom-content">
        <p className="bottom">* Powered by a Galaxy Far Far Away *</p>
      </div>
    </div>
  );
}

export default Home;
