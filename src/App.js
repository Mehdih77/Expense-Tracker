import './App.css';
import AddTransaction from './components/AddTransaction';
import Budget from './components/Budget';
import ListTransaction from './components/ListTransaction';
import AuthContext from './Context/AuthContext';

function App() {

    return (   
        <section className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <AuthContext>
                        <Budget/>
                        <ListTransaction/>
                        <AddTransaction/>
                    </AuthContext>
                </div>
            </div>
        </section>
    );
}

export default App;
