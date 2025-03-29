import '@/app/globals.css';
import Header from '../components/header';
import { motion, useScroll, useAnimationControls } from 'framer-motion';

export default function About() {
    return (
        <div>
            <Header />
            <h1>About</h1>
        </div>
    );
}   
