import logo from './images/tv.png';
import menu from './images/menu.png';
import orange from './images/orange.png';
import imdb from './images/imdb.png';
import play from './images/play.png';


export default function navBar(){
    

    const style = {
        display: 'flex', justifyContent:'space-between', alignItems:'center'
    }

    const style1 = {
        display: 'flex', alignItems:'center', marginTop: '20px',
    }



    const movies = ( ) => {

        // const url = 'https://developer.themoviedb.org/reference/intro/getting-started';
        const url =`https://api.publicapis.org/entries`;
                
    
        let result;
    
        fetch( url)
            .then( response => response.json())
            .then(data => {
                // data = result;
                result = data
                // console.log(result);
                // console.log(data.entries[0]);
            })
    
    
     
    }
    


    return (
        <>
            {/* navbar  */}
            <div className="bkg">
                <div className="navbar">
                    <div style={style}>
                        <img src={logo} alt="" style={{cursor: 'pointer'}}/>
                        <h2 style={{color:"white", paddingLeft:'15px', cursor: 'pointer'}}>MovieBox</h2>
                    </div>
                    <div>
                        <input type="text" placeholder="What do you want to watch?" className='fa fa-search' />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                    </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <p style={{color: 'white', paddingRight:'15px', cursor: 'pointer'}}>Sign in </p>
                        <img src={menu} alt="" style={{cursor: 'pointer'}}/>
                    </div>                    
                </div>


                    {/* hero section  */}

                <div className='hero-content'>
                    <h2>John Wick 3 : <br />
                        Parabellum
                    </h2>
                    <div style={style1}>
                        <div>
                            <img src={imdb} alt="" style={{width: '100%'}}/>
                        </div>
                        <small>86.0 / 100</small>
                        <span style={style}>
                            <img src={orange} alt="" />
                            <small>97%</small>
                        </span>
                    </div>


                    <p>
                        John Wick is on the run after killing a member 
                        of the international assassins' guild, and with 
                        a $14 million price tag on his head, he is the 
                        target of hit men and women everywhere.
                    </p>

                    <button>
                        
                            <img src={play} alt="" />
                            WATCH TRAILER
                      
                    </button>
                </div>


            </div>


           
            

        
        </>
    )
}


    // api endpoint
    // https://developer.themoviedb.org/reference/intro/getting-started
    // api endpoint for each id 
    // https://api.themoviedb.org/3/movie/%7Bmovie_id%7D

    // const url = 'https://developer.themoviedb.org/reference/intro/getting-started';

    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data))