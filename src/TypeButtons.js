import './App.css';

function TypeButtons({chosenTypeOfCandel}) {
    return (
        <div>
            <div className="container">
                    <h1>Select the type of wax</h1>
            </div>

            <div className='buttons'>
                <button onClick={() => chosenTypeOfCandel('soy')}>Soy</button>
                <button onClick={() => chosenTypeOfCandel('coconut')}>Coconut</button>
            </div>
        </div>
    )
}

export default TypeButtons;