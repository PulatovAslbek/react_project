import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext.jsx';

export default function Footer() {
	const [ dictionary, lang, setLang ] = useContext(ThemeContext);

	return (
    <div className='d-flex justify-content-between align-items-center py-4'>
    	<p className="m-0">
    		{
          (dictionary.find(data => {
            if(data.lang === lang) {
              return data;
            }
            return null;
          })).bottom
        }
    	</p>

    	<select onChange={(e) => setLang(e.target.value)} defaultValue={lang}>
    		{
          dictionary.map((data, index) => {
            return <option key={index} value={data.lang}>{data.language}</option>
          })
        }
    	</select>
    </div>
	);
}