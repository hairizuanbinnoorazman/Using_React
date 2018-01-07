import React, { Component } from 'react'

let styles = {
    navLinkBreak: {
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    }
}

class NavBar extends Component {
    render() {
        return (
            <div className="row" style={{ paddingTop: '1rem', margin: '0', backgroundColor: '#ff6600' }}>
                <b style={{ paddingRight: '1rem', paddingLeft: '1rem'}}>Hacker News</b>
                <a>new</a>
                <p style={styles.navLinkBreak}>|</p>
                <a>comments</a>
                <p style={styles.navLinkBreak}>|</p>
                <a>show</a> 
                <p style={styles.navLinkBreak}>|</p>
                <a>ask</a> 
                <p style={styles.navLinkBreak}>|</p>
                <a>jobs</a> 
                <p style={styles.navLinkBreak}>|</p>
                <a>submit</a>
            </div>
        )
    }
}

export default NavBar