import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'


export default function Header() {

  // switch day or night
  const switchDay = () => {
    document.getElementById('body').classList.toggle('bg-dark');
  }

  // Umumiy otadan kelayotgan datani qabul qilamiz
  const [dictionary, lang] = useContext(ThemeContext);

  return (
    <header className='d-flex align-items-center justify-content-between'>
      <h1 className='text-center my-4'>
        {
          (dictionary.find(data => {
            if(data.lang === lang) {
                return data;
            }
            return null;
          })).top
        }
      </h1>

      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" onClick={switchDay} id="customSwitch1" />
        <label className="custom-control-label" htmlFor="customSwitch1">
          {
            (dictionary.find(data => {
              if(data.lang === lang) {
                  return data;
              }
              return null;
            })).switcher
          }
        </label>
      </div>
    </header>
  );
}