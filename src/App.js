
import { Component } from 'react';
import classes from './App.module.css';
import ProductData from './utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import TopBar from './TopBar/TopBar';



class App extends Component {
  state = {
    productData: ProductData ,
    currentPreviewImge : 'https://imgur.com/xSIK4M8.png',
    currentPreviewImgePos: 3,
    showHeartBeatSection : false,
    
  }

 onColorOptionClick = (pos) => {
    const updatedPerviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImge:updatedPerviewImage});
    this.setState({currentPreviewImgePos: pos})
}
onFeatureItemClick = (pos) => {
  let UpdatedState = false;
  if(pos === 1){
    UpdatedState =true;
  }else
  {
    UpdatedState =false;
  }
  this.setState({showHeartBeatSection:UpdatedState})
}
  render(){
   
    
    return (
      <div className="App">  
              <TopBar />
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
              <ProductPreview currentPreviewImage={this.state.currentPreviewImge} 
              showHeartBeatSection={this.state.showHeartBeatSection}
              />
            </div>
            <div className={classes.ProductData}>
              <ProductDetails data = {this.state.productData} onColorOptionClick={this.onColorOptionClick} 
              currentPreviewImgePos={this.state.currentPreviewImgePos} 
              onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection} />
            </div> 
        </div>
      </div>
    );
  }  
}

export default App;
