import React from 'react'


function Student(props){
    //console.log(props)
    return(
        <div class="Section">
            <table class=''>
                <tr>
                    <td>{props.osoba.jmeno}</td>
                </tr>
            <table class=''>
                <tbody>
                    <tr>
                        <td class="right head">skupina    </td>
                        <td class="left-align">{props.osoba.skupina}</td>
                    </tr>
                    <tr>
                        <td class="right head">telefon    </td>
                        <td class="left-align">{props.osoba.phone}</td>
                    </tr>
                    <tr>
                        <td class="right head">email    </td>
                        <td class="left-align">{props.osoba.email}</td>
                    </tr>
                    <tr>
                        <td class="right head">UČO    </td>
                        <td class="left-align">{props.osoba.id}</td>
                    </tr>
                </tbody>
            </table>
            </table>

        </div>
    )
}

export default Student