import React from 'react';
import MenuPng from '../assets/img/menu.png'

const List = ({items}) =>  {
  
    return (<ul className="todo__sidebar-list">
    <li>
      <i>
      <img className="__sidebar-list-img" src={MenuPng}></img>

      </i>
      <span>Все задачи</span>
    </li>

    <li className="active">
      <i>
      
      </i>
      <span>Покупки</span>
    </li>
    <li>
      <i>
      
      </i>
      <span>Заказы</span>
    </li>
    <li>
      <i>
      
      </i>
      <span></span>
    </li>

    {
      items.map(item => 
        <li className="active">
      <i>
      
      </i>
      <span>{item.name}</span>
    </li>
        )
    }
    
  </ul>
    );
};

export default List;


