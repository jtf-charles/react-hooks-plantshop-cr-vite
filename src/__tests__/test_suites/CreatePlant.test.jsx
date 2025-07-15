import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('2nd Deliverable', () => {
  test('adds a new plant when the form is submitted', async () => {
    // Mock liste initiale vide ou basePlants
    global.setFetchResponse(global.basePlants);

    render(<App />);

    const firstPlant = { name: 'foo', image: 'foo_plant_image_url', price: '10' };

    
    global.setFetchResponse({ ...firstPlant, id: '184298qfhquhf92' });

    
    fireEvent.change(screen.getByPlaceholderText('Plant name'), {
      target: { value: firstPlant.name },
    });
    fireEvent.change(screen.getByPlaceholderText('Image URL'), {
      target: { value: firstPlant.image },
    });
    fireEvent.change(screen.getByPlaceholderText('Price'), {
      target: { value: firstPlant.price },
    });
    fireEvent.click(screen.getByText('Add Plant'));

    
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:6001/plants',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(firstPlant),
      })
    );

    
    await waitFor(() => {
      expect(screen.getByText('foo')).toBeInTheDocument();
    });

    
    const secondPlant = { name: 'bar', image: 'bar_plant_image_url', price: '5' };
    global.setFetchResponse({ ...secondPlant, id: '3810fqhrquhf9fnqnc0' });

    fireEvent.change(screen.getByPlaceholderText('Plant name'), {
      target: { value: secondPlant.name },
    });
    fireEvent.change(screen.getByPlaceholderText('Image URL'), {
      target: { value: secondPlant.image },
    });
    fireEvent.change(screen.getByPlaceholderText('Price'), {
      target: { value: secondPlant.price },
    });
    fireEvent.click(screen.getByText('Add Plant'));

    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:6001/plants',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(secondPlant),
      })
    );

    
    await waitFor(() => {
      expect(screen.getByText('bar')).toBeInTheDocument();
    });
  });
});
