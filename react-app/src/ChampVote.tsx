import React, { useState } from 'react';


const champVote: React.FC = () => {
    const [votes, setVotes] = useState<{ [key: string]: number }>({
        Sett: 0,
        Darius: 0,
        Garen: 0,
        Ahri: 0,
        Zed: 0,
        Diana: 0,
        Kayn: 0,
        BelVeth: 0,
        Warwick: 0,
        Vayne: 0,
        Caitlyn: 0,
        Ezreal: 0,
        Leona: 0,
        Blitzcrank: 0,
        Thresh: 0
    });
    const getChampionWithMostVotes = () => {
        let maxVotes = 0;
        let champion = '';

        Object.entries(votes).forEach(([key, value]) => {
            if (value > maxVotes) {
                maxVotes = value;
                champion = key;
            }
        });

        return champion;
    };

    const [selectedChamp, setSelectedChamp] = useState<string>('');

    const voteCount = (Champ: string) => {
        setVotes((prevCount) => ({
            ...prevCount,
            [Champ]: prevCount[Champ] + 1,
        }));
        setSelectedChamp(Champ);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <h3 id="TopLane">Top Lane</h3>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" align="left">
                            Champ
                        </th>
                        <th scope="col" align="center">
                            Votes
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={selectedChamp === 'Sett' ? 'active' : ''}>
                        <td onClick={() => voteCount('Sett')}>Sett</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Sett']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Darius' ? 'active' : ''}>
                        <td onClick={() => voteCount('Darius')}>Darius</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Darius']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Garen' ? 'active' : ''}>
                        <td onClick={() => voteCount('Garen')}>Garen</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Garen']}</td>
                    </tr>
                    
                </tbody>
                <br></br>      <br></br>      <br></br>      <br></br>      <br></br>
                <tr>
                    <th colSpan={2}>
                        <h3 id="MidLane">Mid Lane</h3>
                    </th>
                </tr>
                <tr>
                    <th scope="col" align="left">
                        Champ
                    </th>
                    <th scope="col" align="center">
                        Votes
                    </th>
                </tr>
                <tbody>
                    <tr className={selectedChamp === 'Ahri' ? 'active' : ''}>
                        <td onClick={() => voteCount('Ahri')}>Ahri</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Ahri']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Diana' ? 'active' : ''}>
                        <td onClick={() => voteCount('Diana')}>Diana</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Diana']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Zed' ? 'active' : ''}>
                        <td onClick={() => voteCount('Zed')}>Zed</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Zed']}</td>
                    </tr>
                </tbody>
                <br></br>      <br></br>      <br></br>      <br></br>      <br></br>
                <tr>
                    <th colSpan={2}>
                        <h3 id="Jungle">Jungle</h3>
                    </th>
                </tr>
                <tr>
                    <th scope="col" align="left">
                        Champ
                    </th>
                    <th scope="col" align="center">
                        Votes
                    </th>
                </tr>
                <tbody>
                    <tr className={selectedChamp === 'Kayn' ? 'active' : ''}>
                        <td onClick={() => voteCount('Kayn')}>Kayn</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Kayn']}</td>
                    </tr>
                    <tr className={selectedChamp === 'BelVeth' ? 'active' : ''}>
                        <td onClick={() => voteCount('BelVeth')}>BelVeth</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['BelVeth']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Warwick' ? 'active' : ''}>
                        <td onClick={() => voteCount('Warwick')}>Warwick</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Warwick']}</td>
                    </tr>
                </tbody>
                <br></br>      <br></br>      <br></br>      <br></br>      <br></br>
                <tr>
                    <th colSpan={2}>
                        <h3 id="ADC">ADC</h3>
                    </th>
                </tr>
                <tr>
                    <th scope="col" align="left">
                        Champ
                    </th>
                    <th scope="col" align="center">
                        Votes
                    </th>
                </tr>
                <tbody>
                    <tr className={selectedChamp === 'Vayne' ? 'active' : ''}>
                        <td onClick={() => voteCount('Vayne')}>Vayne</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Vayne']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Caitlyn' ? 'active' : ''}>
                        <td onClick={() => voteCount('Caitlyn')}>Caitlyn</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Caitlyn']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Ezreal' ? 'active' : ''}>
                        <td onClick={() => voteCount('Ezreal')}>Ezreal</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Ezreal']}</td>
                    </tr>
                </tbody>
                <br></br>      <br></br>      <br></br>      <br></br>      <br></br>
                <tr>
                    <th colSpan={2}>
                        <h3 id="Support">Support</h3>
                    </th>
                </tr>
                <tr>
                    <th scope="col" align="left">
                        Champ
                    </th>
                    <th scope="col" align="center">
                        Votes
                    </th>
                </tr>
                <tbody>
                    <tr className={selectedChamp === 'Leona' ? 'active' : ''}>
                        <td onClick={() => voteCount('Leona')}>Leona</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Leona']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Blitzcrank' ? 'active' : ''}>
                        <td onClick={() => voteCount('Blitzcrank')}>Blitzcrank</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Blitzcrank']}</td>
                    </tr>
                    <tr className={selectedChamp === 'Thresh' ? 'active' : ''}>
                        <td onClick={() => voteCount('Thresh')}>Thresh</td>
                        <td style={{ paddingLeft: '20px' }}>{votes['Thresh']}</td>
                    </tr>

                </tbody>
                <br></br>      <br></br>      <br></br>      <br></br>      <br></br>
            </table>
        </div>

    );
};



export default champVote