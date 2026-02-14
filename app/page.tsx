"use client"

import { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

import getProjet from '../hooks/variable_env';

export default function Home() {
	
	getProjet();
	return <h1>Bienvenue sur mon répertoire de projets</h1>;
}