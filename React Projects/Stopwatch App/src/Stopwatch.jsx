import Reat,{userState,useEffect,useRef, useState, use} from 'react';

function Stopwatch(){

    const [isrunning,setIsrunning] = useState(false);
    const [elapsedtime,setElapsedtime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isrunning){
            intervalIdRef.current =  setInterval(() => {
                setElapsedtime(Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    },[isrunning]);

    function start(){
        setIsrunning(true);
        startTimeRef.current = Date.now() - elapsedtime;
    }

    function stop(){
        setIsrunning(false);
    }

    function reset(){
        setElapsedtime(0);
        setIsrunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
        let second = Math.floor(elapsedtime / (1000) % 60);
        let milliseconds = Math.floor((elapsedtime % 1000) / 10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        second = String(second).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");

        return `${hours}:${minutes}:${second}:${milliseconds}`;
    }

    return (
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button className="start-button" onClick={start}>
            Start
          </button>
          <button className="stop-button" onClick={stop}>
            Stop
          </button>
          <button className="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    );
}

export default Stopwatch