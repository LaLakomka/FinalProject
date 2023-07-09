import React from 'react';
import css from "./Form2.module.scss";
import document from '../../shared/icons/Form2/sheet.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHistogramInfo, getPublication } from '../../../store/slices/histograms';
import {useNavigate} from 'react-router-dom';
import validateInn from '../../../utils/validateInn';

export const SearchForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setExpireDate] = useState('');
  const [inn, setInn] = useState('');
  const [accessedDocs, setAccessedDocs] = useState('');
  const [maxFullness, setMaxFullness] = useState(false);
  const [inBusinessNews, setInBusinessNews] = useState(false);
  const [onlyMainRole, setOnlyMainRole] = useState(false);
  const [excludeAnnouncements, setExcludeAnnouncements] = useState(false);
  const [tonality, setTonality] = useState('any');
  const [isInnValid, setIsInnValid] = useState(false);
  const [isDocQuantityValid, setIsDocQuantityValid ] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false)
  const navigate = useNavigate();

  
  const onChangeStartDate = (evt) => {
    const newValue = evt.target.value;
    if(new Date(newValue).getTime() < new Date().getTime() 
    && new Date(newValue).getTime() < new Date(endDate).getTime()){
      setIsDateValid(true);
    }else{
      setIsDateValid(false);
    }
    setStartDate(newValue)
  }
  const onChangeExpireDate = (evt) => {
    const newValue = evt.target.value;
    if(new Date(newValue).getTime() < new Date().getTime() 
    && new Date(newValue).getTime() > new Date(startDate).getTime()){
      setIsDateValid(true);
    }else{
      setIsDateValid(false);
    }
    setExpireDate(newValue)
  }
  const dispatch = useDispatch()
  const onChangeInn = (evt, typeInputInfo) => {
    const error = {}
    const newValue = evt.target.value;
    const result = validateInn(newValue, error);
    setIsInnValid(result);
    typeInputInfo(newValue); 
  }
  const onChangeQuantity = (evt) =>{
    const newValue = evt.target.value;
    if(+newValue>0 && +newValue<1001 && Number.isInteger(+newValue)){
      setIsDocQuantityValid(true);
    }else{
      setIsDocQuantityValid(false);
    }
    setAccessedDocs(newValue)
  }
  const onCheckHandle = (evt, setInputChecked) => {
    setInputChecked(checked =>!checked)
  }
  const onSelectHandle = (evt) => {
    setTonality(evt.target.value)
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const requestBody = {
      issueDateInterval: {
        startDate,
        endDate
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn,
              maxFullness: maxFullness,
              inBusinessNews: inBusinessNews 
            }
          ],
          onlyMainRole: onlyMainRole,
          tonality: tonality,
          onlyWithRiskFactors: false,
          riskFactors: {
            and: [],
            or: [],
            not: []
          },
          themes: {
            and: [],
            or: [],
            not: []
          }
        },
        themesFilter: {
          and: [],
          or: [],
          not: []
        }
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: []
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true
      },
      similarMode: "duplicates",
      limit: 1000,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: [
        "totalDocuments",
        "riskFactors"
      ]
    }
    dispatch(getHistogramInfo(requestBody));
    dispatch(getPublication(requestBody))
    navigate('/ResultPage')
  }
  
  const submitDisable = !( isDateValid && isInnValid && isDocQuantityValid )
  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <div className={css.Wrapper}>
        <img className={css.toggleSvg} src={document} alt='document'/>
        <div className={css.searchForm__inputs}>
          <label className={css.label} htmlFor='inn' >ИНН компании*<sup className={[!isInnValid? css.errorSup : '']}></sup></label>
          <input 
          className={[isInnValid ? css.input : css.inputError]} 
          type='input' 
          id='inn' 
          placeholder='10 цифр' 
          name='inn'
          value={inn}
          onChange={(evt=>onChangeInn(evt, setInn))} 
          />
          {!isInnValid && <section className={css.innError}>Введите корректные данные</section>}
          <label htmlFor='tone'>Тональность</label>
          <select className={css.inputTone} id='tone' value={tonality} onChange={evt => onSelectHandle(evt)}>
            <option value='positive' >позитивная</option>
            <option value='negative' >негативная</option>
            <option value='any' >любая</option>
          </select>
          <label className={css.label} htmlFor='documentQuantity' >Количество документов в выдаче*<sup className={!isDocQuantityValid ? 'errorSup': ''} ></sup></label>
          <input 
          className={[isDocQuantityValid ? css.input : css.inputError]}
          type='number' 
          id='documentQuantity' 
          placeholder='От 0 до 1000' 
          min="0" max="1000" 
          step="1" 
          name='documentQuantity'
          value={accessedDocs}
          onChange={(evt)=>onChangeQuantity(evt)}
          />
          {!isDocQuantityValid && <section className={css.innError}>Обязательное поле</section>}
            <label htmlFor="start">Диапазон поиска*<sup className={[!isDateValid ? css.errorSup : '']}></sup></label>
          <div className={css.dateSpan}>
            <input 
            className={[isDateValid? css.input1 : css.inputError1]} 
            type="date" 
            id="start" 
            name="startDate" 
            placeholder='Дата начала' 
            value={startDate}           
            onChange={(evt=>onChangeStartDate(evt))}
            />
            <input 
            className={[isDateValid ? css.input2 : css.inputError2]} 
            type="date" 
            id="end" 
            name="startDate" 
            placeholder='Дата конца' 
            value={endDate}
            onChange={(evt=>onChangeExpireDate(evt))}
            />
          </div>
          {!isDateValid && <section className={`${css.innError} ${css.dateError}`}>Введите корректные данные</section>}
 
        </div>
        <div className={css.checkBoxesAndBtn}>
          <div className={css.checkBoxes}>
            <div className={css.check} >
              <input className={css.checkBox} type="checkbox" id="first" name="maxFullness"  
              onChange={(evt) =>onCheckHandle(evt, setMaxFullness)} checked={maxFullness}/>
              <label htmlFor="first">Признак максимальной полноты</label>
            </div>
            <div className={css.check} >
              <input className={css.checkBox} type="checkbox" id="second" name="inBusinessNews"  
              onChange={(evt) =>onCheckHandle(evt, setInBusinessNews)} checked={inBusinessNews}/>
              <label htmlFor="second">Упоминания в бизнес-контексте</label>
            </div>
            <div className={css.check} >
              <input className={css.checkBox} type="checkbox" id="third" name="onlyMainRole"  
              onChange={(evt) =>onCheckHandle(evt, setOnlyMainRole)} checked={onlyMainRole}/>
              <label htmlFor="third">Главная роль в публикации</label>
            </div>
            <div className={css.check} >
              <input className={css.checkBox} type="checkbox" id="fourth" name="checkBox"/>
              <label htmlFor="fourth">Публикации только с риск-факторами</label>
            </div>
            <div className={css.check}>
              <input className={css.checkBox} type="checkbox" id="fifth" name="checkBox"/>
              <label htmlFor="fifth">Включать технические новости рынков</label>
            </div>
            <div className={css.check} >
              <input className={css.checkBox} type="checkbox" id="sixth" name="excludeAnnouncements"  
              onChange={(evt) =>onCheckHandle(evt, setExcludeAnnouncements)} checked={excludeAnnouncements}/>
              <label htmlFor="sixth">Включать анонсы и календари</label>
            </div>
            <div className={css.check}>
              <input className={css.checkBox} type="checkbox" id="seventh" name="checkBox"/>
              <label htmlFor="seventh">Включать сводки новостей</label>
            </div>
          </div>
          <div className={css.btnWrapper}>
            <button 
            className={css.button}
            type='submit'
            disabled={submitDisable}
            style={{opacity: submitDisable ? '50%' : '100%'}}>Поиск</button>
            <span className={css.span}>* Обязательные к заполнению поля</span>
          </div>
        </div>
      </div>    
    </form>
  )
}


