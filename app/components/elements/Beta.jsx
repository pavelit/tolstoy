import React, {Component, PropTypes} from 'react';

import PostsList from 'app/components/cards/PostsList';

export default class Products extends Component {
	// you can pass either user object, or username string

  constructor(props) {
        super(props);
        this.state = {};
 
    }

    static defaultProps = {
		
	}




	render() {

    //let posts = this.getPosts('created', 'bm-tasks');

		
		return 	<div className="Beta">

        <div className="Beta__title">
Это beta-версия нового поколения IT-платформы БМ
        </div>


	

    
    <div className="Beta__desc">Теперь система сама будет вести вас до результата. 
Нейросеть приведет вас к вашей точке B.</div>
</div>
	}
}

