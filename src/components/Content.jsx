import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../store/actions'

function Content() {
  const dispatch = useDispatch()
  const news = useSelector(store => store.data.data)
  console.log(news);

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <Wrapper>
          {news?.articles?.map(item => (
            <div className='news-item' key={Math.random()}>
              <div className='news-image'>
                <img src={item.urlToImage} alt="" />
              </div>
              <div className='news-text'>
                <h3>{item.content}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
    </Wrapper>
  )
}

export default Content

const Wrapper = styled.div `
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;

  .news-item {
    padding: 20px;
    min-height: 214px;
    display: flex;
    gap: 30px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 800px) {
      /* .news-image {
        img {
          width: 100%;
        }
      } */
    }

    .news-image {

      img {
        width: 300px;
        height: 172px;
        object-fit: cover;
      }
    }

    .news-text {
      h3 {
        margin-bottom: 11px;
      }
    }
  }
`