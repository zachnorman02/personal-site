import React from 'react';
import './App.css';

class ProjectDescription extends React.Component {
    render() {
        return (
            <div>
                <h1>Takeout Restaurant Menu & Ordering App + Website </h1>
                <h3>May-June 2022, Projects 1+2 of Google UX Design Certificate</h3>
                <hr/>
                <h2>Project Overview</h2>
                <p>Takeout Restaurant is a regional carryout restaurant that has existed in an urban area for many
                    years. It strives to carry a wide variety of menu items at reasonable prices. Takeout targets
                    customers who have busy schedules and can’t do adequate meal preparation, as people with busy
                    schedules, such as long hours at work, commutes, family events, etc do not have time to prepare or
                    plan meals
                    <br/>
                    The goal in designing this app is to create an easy-to-use app that allows people to order meals for
                    pickup on-the-go. The design for this app took place from May-June 2022 as part of my Google UX
                    Design Certificate program.
                    <br/>
                    I was the sole UX designer for this app, designing from conception to delivery, while taking
                    feedback from peers. My responsibilities included paper and digital wireframing, low and
                    high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating
                    on designs.</p>
                <h2>User Research</h2>
                <p>I conducted interviews to understand users’ needs in a takeout app. An assumption going in was that
                    many users who frequently use takeout apps would be working adults with busy schedules. While
                    research did confirm this, another major group that was identified were those with accessibility
                    needs, such as those with low-vision, or those who are not yet fluent in their local language.
                    <br/>
                    Some of the pain points identified included:
                    <ol>
                        <li><strong>Time.</strong> Many people have busy work schedules, making it difficult to plan and
                            cook meals.
                        </li>
                        <li><strong>Accessibility.</strong> For users who rely on assistive technology, it can be
                            difficult to use existing
                            products due to them not being well-adapted to tools like screen-readers.
                        </li>
                        <li><strong>Communication.</strong> For those who are still learning the official language of
                            where they live, it can be
                            difficult to order in-person without translation tools.
                        </li>
                    </ol>
                </p>
                <h2>Persona</h2>
                <p>Problem statement: Antonio is a project management intern who needs a multilingual takeout ordering
                    app
                    because he would like to order food on the go without worrying about a language barrier.</p>
                <h2>User Journey</h2>
                <p>Mapping Antonio’s journey revealed how having access to a takeout ordering app would be helpful to
                    many users.
                </p>
                <h2>Wireframes</h2>
                <h3>Paper Wireframe</h3>
                <p>Making multiple iterations of the menu page ensured coming up with the best possible experience in
                    the end. While I chose at the time to go with the bottom screen, I ended up choosing to have a menu
                    bar at the bottom instead of popping out from the side to make items more easily accessible</p>
                <h3>Digital Wireframes</h3>
                <h4>Home page</h4>
                <p>My goal was to create an app that was easy to use and allowed users to quickly browse and add menu
                    items they were interested in.</p>
                <h4>Menu item customization</h4>
                <p>As many users have potential allergies or foods they may not like, I wanted to make sure there was a
                    simple menu for users to make any customizations they would need to make for their order.</p>
                <h3>Low-fidelity prototype</h3>
                <p>The low-fidelity prototype connected the primary user flow of adding a menu item and placing an
                    order, so the prototype could be used in a usability study with users.
                    View low-fidelity prototype <a
                        href={'https://www.figma.com/proto/iVI0x65hHxycmH4g3AiSO7/Takeout-app-lo-fi?page-id=0%3A1&node-id=33%3A12&viewport=129%2C-150%2C0.73&scaling=contain&starting-point-node-id=33%3A12'}>here</a>
                </p>
                <h2>Usability study: findings</h2>
                <p>I conducted two rounds of usability studies. Findings from the first study used a low-fidelity
                    prototype and helped guide the designs into what would be a useful product for users. The second
                    study used a high-fidelity prototype and helped with determining what needed refining.</p>

            </div>
        )
    }
}

export default ProjectDescription;