/**
 * 下拉组件
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import EventHandler from '@/utils/event';
import classnames from 'classnames';
import './index.less';
interface IOptions {
	id: string | number,
	name: string
}
interface IProps
{
	options:IOptions[],
	text:string,
	onCallback?: (event: any) => void,
	style?: object,
	placeholder?:string,
	defaultValue?:string | number
}

interface IState{
	options:IOptions,
	expand:boolean
}

@observer
export default class Select extends React.Component<IProps, IState> {
	public state = {
		// 选择的项
		options:{id: '', name: ''},
		expand: false,
	}
	public componentDidMount() {
		if(this.props.defaultValue) {
			this.setState({
				options:this.props.options.filter((item) => item.id === this.props.defaultValue)[0]
			}, () => {
				if(this.props.onCallback) {
					this.props.onCallback(this.state.options);
				}
			});
		} else if(!this.props.placeholder) {
			this.setState({
				options:this.props.options[0]
			});
			if(this.props.onCallback) {
				this.props.onCallback(this.props.options[0]);
			}
		}

		// 注册全局点击事件，以便点击其他区域时，隐藏展开的内容
		EventHandler.add(this.globalClick);
	}
	// 全局点击
	public globalClick = () => {
		this.setState({ expand: false });
	}
	// 选择选项
	public onSelect = (item) => {

		this.setState({ options: item, expand: false });

		if(this.props.onCallback) {
			this.props.onCallback(item);
		}
	}
	// 展开
	public onExpand = (e) => {
		// 取反
		const expand = !this.state.expand;
	
		this.setState({
		  expand: expand
		});
	
		e.stopPropagation();
	  }
	public componentWillUnmount() {
		//  组件释放remove click处理
		EventHandler.remove(this.globalClick);
	  }

	public render()
	{
		const selectBox = classnames('select-box', {'disNone': !this.state.expand})
		const { options = [] } = this.props;
		let showName:string = this.props.placeholder || options[0][name];
		if(this.state.options && this.state.options.name) {
			showName =   this.state.options.name
		}
		return (
			<div className="select-wrapper"
				onClick={this.onExpand}
			>
				<div className="select-type">{this.props.text}</div>
				<div className="selected-text" style={this.props.style}>
					<span>{showName}</span>
					<span className="triangle" />
				</div>
				<div className={selectBox}>
					<ul>
						{
							options.map((v, i) => {
								return <li key={i} className='option' onClick={this.onSelect.bind(this, v)}>{v.name}</li>;
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}