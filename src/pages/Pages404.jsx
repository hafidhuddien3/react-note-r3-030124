import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
 
function Page404() {
    const { locale } = React.useContext(LocaleContext);
 
  return (
    <section>
      <br/>
      <h2 className=''>{locale=== 'id'? 'Halaman tidak ada, 404 Page': '404 Page'}</h2>
    </section>
  )
}
 
export default Page404;