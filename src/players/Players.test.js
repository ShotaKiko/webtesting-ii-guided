import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'

import Players from './Players'

xit('should render', () => {
    render(<Players />)
})

it('should display default message if no players', () => {
    const { queryByText } = render(<Players />)
    const defaultMessage = queryByText(/no players available./i)

    expect(defaultMessage).toBeInTheDocument()
})

it('should return the player names', () => {
    const players = [
        {id: 1, name:"Shota"},
        {id: 2, name:"Kerby"},
        {id: 3, name:"Ranger"},
    ]
    const playerNames = players.map(p => p.name )

    const { getByText, getAllByTestId } = render(<Players players={players}/>)
    getByText(/player list:/i)
    
    const playerList = getAllByTestId('player-name')
    
    expect(playerList.length).toBe(players.length)
    
    const divText = playerList.map(d => d.textContent)
    
    expect(playerNames).toEqual(divText)
})