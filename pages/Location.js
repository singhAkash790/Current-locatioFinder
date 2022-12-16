import React, { useEffect } from 'react';
import { usePosition } from 'use-position';

export const location = () => {
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if (latitude && longitude && !error) {
      console.log(latitude, longitude, error)
    }
  }, )}