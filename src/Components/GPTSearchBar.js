import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
const GPTSearchBar = () => {
  const appLang = useSelector(store => store.config.lang);
  return (
    <div className="pt-[35%] md:pt-[15%] flex justify-center">
      <form  className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder={lang[appLang].searchPlaceHolder}  className=" p-4 m-4 col-span-9"></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[appLang].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar