/*
아래 표현식에서 어떤 alert가 실행될까요?

if(...) 안에 표현식이 있으면 어떤 일이 일어날까요?
*/
if (-1 || 0) alert( 'first' ); // t || f === t
if (-1 && 0) alert( 'second' ); //  t & f === f 
if (null || -1 && 1) alert( 'third' ); // f || t && t -> f || t === t 