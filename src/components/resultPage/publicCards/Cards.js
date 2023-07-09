import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {  getDocuments } from '../../../store/slices/histograms';
import css from "./publicCards.module.scss";
import {convertDocObjectToCard} from '../../../utils/convertDocObjectToCardInfo';
import Badge from 'react-bootstrap/Badge';

export const Cards = () => {

  const publicationIds = useSelector((state) => state.histograms.publicationIds, shallowEqual);
  const documents = useSelector((state) => state.histograms.documents, shallowEqual);
  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(0);

  
  useEffect(()=>{
    if(publicationIds.length){
      const idsForRequest = publicationIds.slice(offSet,  offSet+10)
      if(idsForRequest.length) {
        dispatch(getDocuments({ids:idsForRequest}))
      }
    }
  },[publicationIds,dispatch,offSet])
 
  if(!documents.length) {
    return null
  }
  const docs = convertDocObjectToCard(documents)
  const showTenArticles = () => {
    const idsForRequest = publicationIds.slice(offSet, 10);
    dispatch(getDocuments({ids:idsForRequest}))
    setOffSet((offSet)=>offSet+10)
  }

  let isDone = documents.length >= publicationIds.length
  return (
    <>
    <div className={css.wrapper}>
    {docs.map((obj, ind)=>
    <div className={css.content} key={ind}>
        <div className={css.date}>
          <span className={css.span}>{obj.date}</span>
          <a 
          className={css.a}
          href={obj.articleUrl}>{obj.articleUrlTitle}
          </a>
        </div>
        <h4 className={css.title}>{obj.articleTitle}</h4>
        {obj.articleTags && obj.articleTags.map(tag => (
          <Badge bg="warning" text="dark" key={tag}>{tag}</Badge>
        ))}
        {obj.imageUrl && <img className={css.img} src={obj.imageUrl} alt='article pic' />}
        <div dangerouslySetInnerHTML={{ __html: obj.articleContent }} />
        <div className={css.buttonBox}>
          <form action={obj.articleUrl} target="_blank"> 
            <button className={css.button}>Читать источник</button>
          </form>
          <section className={css.section}>{obj.wordCount} слов&lang;а&rang;</section>
        </div>
    </div>         
      )}
  </div>
  <div className={css.adjustBox}>
    {!isDone && <button onClick={showTenArticles} className={css.showBtn}>Показать больше</button>}
  </div>
  </>
)
}


