import { useEffect } from 'react';

const Curriculum = () => {
    const component = ()=>{
        if(typeof window.orientation!= 'undefined'){
            document.getElementById("download").click();
            window.close();
        }else{
          document.getElementById("download").style.display='none';
        }
    }
    useEffect(()=>{
        component();
    }, []);

  return (
    <div style={{position: 'absolute', width: '100%', height: '100%'}}>
      <object
        data={require('../../docs/Miguel-Hilser-Cv.pdf')}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
      <br/>
      <a href={require('../../docs/Miguel-Hilser-Cv.pdf')} download="Miguel-Hilser-Cv.pdf" id='download'>
        You device cannot view the PDF
      </a>
    </div>
  );
};

export default Curriculum;
