import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";

const Cart = () => {
    const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <div className="container">
                <h3>Sepetinde bulunan ürünler</h3>
                {products.length > 0 ? <>
                <div className="row">
                    <div className="col-9">
                    <div className="cart__heading">
                        <div className="row">
                            <div className="col-2">Resim</div>
                            <div className="col-2">İsim</div>
                            <div className="col-2">Fiyat</div>
                            <div className="col-2">Azalt/Ekle</div>
                            <div className="col-2">Toplam Fiyat</div>
                            <div className="col-2">Sil</div>
                        </div>
                    </div>
                    {products.map(product => (
                        <div className="row" key={product.id}>
                         <div className="col-2">
                             <div className="cart__image">
                                 <img src={`/images/${product.image}`} alt=""/>
                            </div>   
                         </div>
                         <div className="col-2">
                             <div className="cart__name">
                                 {product.name}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__price">
                                 {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
                             </div>
                         </div>
                         <div className="col-2">
                          <div className="details__info">
                              <div className="details__info__k">
                                <span  onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash className='details__info__k--dec'/></span>
                                <span className="details__info__k--quantity">{product.quantity}</span>
                                <span  onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus className='details__info__k--inc'/></span>
                            </div>
                          </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__total">
                                 {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                                 <BsReverseBackspaceReverse />
                             </div>
                         </div>
                        </div>
                    ))}
                    </div>
                    <div className="col-3">
                        <div className="summary">
                            <div className="summary__heading">
                               Özet
                            </div>
                            <div className="summary__details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Toplam Ürün:
                                    </div>
                                  <div className="col-6">{totalQuantities}</div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Toplam Fiyat
                                    </div>
                                    <div className="col-6">
                                        {currencyFormatter.format(totalPrice, {code: 'USD'})}
                                    </div>
                                </div>
                                <button type="button" className="summary__details--checkout">Ödeme</button>
                            </div>
                        </div>
                    </div>
                </div>
                </> : 'Sepette Ürün Bulunmuyor.!'}
            </div>
        </div>
    )
}

export default Cart