import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
//import Button from '@vkontakte/vkui/dist/components/Button/Button';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Icon24Add from '@vkontakte/icons/dist/24/add';
//import Group from '@vkontakte/vkui/dist/components/Group/Group';
//import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
//import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
			Заявка на заправку картриджа
		</PanelHeader>
		{//fetchedUser &&
		//<Group title="User Data Fetched with VK Bridge">
		//	<Cell
		//		before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
		//		description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
		//	>
		//		{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
		//</Group></Group>	</Cell>
		//</Group>
		}
			<Div>
				{//<Button before={<Icon16Add/>}>Add item</Button>
				}
				<CellButton before={<Icon24Add />} onClick={go} data-to="new">Добавить заявку</CellButton>
			</Div>
			<Separator style={{ margin: '12px 0' }} />
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
