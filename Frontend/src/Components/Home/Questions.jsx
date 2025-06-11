import React from 'react';

const Questions = () => {
    return (
        <div>
            <div>
                <p className="text-3xl font-bold mb-5">Frequently Asked Questions</p>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-left">What is Movie Verse?</div>
                    <div className="collapse-content text-left">
                        <p>Movie Verse is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
                            documentaries, and more on thousands of internet-connected devices.
                            You can watch as much as you want, whenever you want without a single commercial - all for one low
                            monthly price. There's always something new to discover and new TV shows and movies are added every
                            week!</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-left">How much does Movie Verse cost?</div>
                    <div className="collapse-content text-left">
                        <p>Watch Movie Verse on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly
                            fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-left">Where can I watch?</div>
                    <div className="collapse-content text-left">
                        <p>Watch anywhere, anytime. Sign in with your Movie Verse account to watch instantly on the web at Movie Verse.com
                            from your personal computer or on any internet-connected device that offers the Movie Verse app, including
                            smart TVs, smartphones, tablets, streaming media players and game consoles.
                            You can also download your favorite shows with the iOS or Android app. Use downloads to watch while
                            you're on the go and without an internet connection. Take Movie Verse with you anywhere.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;