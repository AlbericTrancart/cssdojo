'use client';
import { FormEvent, useEffect, useState } from 'react';
import { event } from 'nextjs-google-analytics';
import Image from 'next/image';
import { Radio } from 'components/Radio';
import { Textarea } from 'components/Input';
import { Button } from 'components/Button';
import styles from './KataRating.module.scss';
import blueHeartImage from './blue-heart.png';

interface Props {
  kataId: string;
}

const options = [0, 1, 2, 3, 4, 5];

const getKataRating = (kataId: string) => {
  try {
    const rating = localStorage.getItem(`k-${kataId}`);

    return rating !== null ? parseInt(rating) : '';
  } catch {
    console.warn('There was an issue with local storage!');
  }

  return '';
};

const setKataRating = (kataId: string, rating: number) => {
  try {
    localStorage.setItem(`k-${kataId}`, rating.toString());
  } catch {
    console.warn('There was an issue with local storage!');
  }
};

export const KataRating: React.FC<Props> = ({ kataId }) => {
  const [rating, setRating] = useState<number | ''>('');
  const [feedback, setFeedback] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  console.log({ rating });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (rating === '') {
      return;
    }
    setKataRating(kataId, rating);

    event('kata_feedback', { kataId, rating, feedback });

    setSubmitted(true);
  };

  useEffect(() => {
    setRating(getKataRating(kataId));
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <fieldset className={styles['fieldset']}>
        <legend className={styles['legend']}>Rate this kata!</legend>

        <div className={styles['flex']}>
          <div className={styles['rating-scale']}>I learnt nothing</div>

          <div className={styles['rating-container']}>
            {options.map((value) => (
              <label key={value} htmlFor={`rating-option-${value}`} className={styles['label']}>
                {value}
              </label>
            ))}
            {options.map((value) => (
              <Radio
                key={value}
                type="radio"
                id={`rating-option-${value}`}
                name="rating"
                value={value}
                onChange={(val) => setRating(parseInt(val))}
                checked={value === rating}
                required
              />
            ))}
          </div>

          <div className={styles['rating-scale']}>I learnt a lot</div>
        </div>

        <div className={styles['feedback']}>
          <label htmlFor="rating-feedback">
            What did you learnt / what was difficult? (optional)
          </label>
          <Textarea
            id="rating-feedback"
            name="rating-feedback"
            onChange={setFeedback}
            value={feedback}
            className={styles['feedback-input']}
          />
        </div>

        <div className={styles['submit-container']}>
          {!submitted ? (
            <Button type="submit">Submit</Button>
          ) : (
            <strong>
              Thanks for the feedback, it helps me a lot{' '}
              <Image src={blueHeartImage} alt="❤" className={styles['heart']} />
            </strong>
          )}
        </div>
      </fieldset>
    </form>
  );
};
