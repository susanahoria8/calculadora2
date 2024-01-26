import Button from './Button.jsx';
import './Button.css';
import './Base.css';

export default function PaneldeBotones ({clickHandle}) {

	const handleClick = nameOfButton => {
		clickHandle(nameOfButton)
	}

	return(
		
		<div>
			<div className='container'>

				<Button name="CE" clickHandle={handleClick}/>
				<Button name="+/-" clickHandle={handleClick} />
				<Button name="%" clickHandle={handleClick} />
				<Button name="/" clickHandle={handleClick} />
				<Button name="7" clickHandle={handleClick} />
				<Button name="8" clickHandle={handleClick}/>
				<Button name="9" clickHandle={handleClick} />
				<Button name="x" clickHandle={handleClick} />
				<Button name="4" clickHandle={handleClick} />
				<Button name="5" clickHandle={handleClick} />
				<Button name="6" clickHandle={handleClick}/>
				<Button name="-" clickHandle={handleClick} />
				<Button name="1" clickHandle={handleClick} />
				<Button name="2" clickHandle={handleClick} />
				<Button name="3" clickHandle={handleClick} />
				<Button name="+" clickHandle={handleClick}/>
				
				<div className='Cero'>
					<Button name="0" clickHandle={handleClick} />
				</div>
				
				<Button name="." clickHandle={handleClick} />
				<Button name="=" clickHandle={handleClick} />
				
			</div>
		</div>
		
		
		);
}