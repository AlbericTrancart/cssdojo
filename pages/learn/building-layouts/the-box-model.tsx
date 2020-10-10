import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';

const Kata: NextPage = () => (
  <>
    <Title>The Box Model</Title>

    <Subtitle>Introduction</Subtitle>

    <p>
      Every element in CSS is a box, and{' '}
      <strong>it is really important to understand how this box system works</strong> to master
      layout techniques.
    </p>

    <Exercise
      initialCode={`<style>
.box {
  color: blue;
}
</style>

<div class="box">Hello World!</div>`}
      solution={`<style>
.box {
  color: blue;
  border: 1px solid red;
}
</style>

<div class="box">Hello World!</div>`}
    />

    <p>Essaye de mettre une bordure à la boite !</p>
  </>
);

export default Kata;
