import PropTypes from 'prop-types';
import Header from './header';
function DefaultLayout({ children }) {
    return <div className="wrapper w-screen h-auto min-h-screen flex flex-wrap justify-around lg:justify-between">
        <Header />

        <main className={`w-screen h-auto flex flex-wrap transition-all`}>
            {children}
        </main>
    </div>
}
DefaultLayout.propTypes = {
    children: PropTypes.node
};
export default DefaultLayout;