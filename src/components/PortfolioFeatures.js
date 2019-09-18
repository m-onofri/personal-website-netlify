import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => {

    const groupItemByTwo = (arr) => {
        let finalArr = [];
        let tempArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (tempArr.length < 2) {
                tempArr.push(arr[i]);
            } else {
                finalArr.push(tempArr);
                tempArr = [arr[i]];
            }
        }

        if (tempArr.length > 0) {
            finalArr.push(tempArr)
        }

        return finalArr;
    }

    const portfolioItems = groupItemByTwo(gridItems);

    return (
        <>
            {portfolioItems.map((items, i) => 
                <div className="row" key={i}>
                    {items.map((item, j) => 
                        <div className="col-6 col-12-narrower">
                            <section>
                                <PreviewCompatibleImage imageInfo={item} />
                                <header>
                                    <h3>Project 1</h3>
                                </header>
                                <p>{item.text}</p>
                            </section>
                        </div>
                    )}
                </div>  
            )}
        </>
    )
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid