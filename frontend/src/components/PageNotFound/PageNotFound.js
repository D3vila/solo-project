import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <>
            <div>
                <div className='face'>
                    <div className="eyes"></div>
                    <div className="mouth"></div>
                    <div className="ghost__feet">
                        <div className="ghost__feet-foot"></div>
                        <div className="ghost__feet-foot"></div>
                        <div className="ghost__feet-foot"></div>
                        <div className="ghost__feet-foot"></div>
                    </div>

                </div>
                <div className="shadow"></div>
            </div>

            <h1>Oops! Something went wrong!</h1>
            <div className="btn">Return to Home</div>
        </>
    )
}
