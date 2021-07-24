import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
    const stdlib = await loadStdlib(process.env);
    const startingBalance = stdlib.parseCurrency(100);

    const alice = await stdlib.newTestAccount(startingBalance);
    const bob = await stdlib.newTestAccount(startingBalance);
    const carl = await stdlib.newTestAccount(startingBalance);

    console.log("Alice is deploying the backend...");
    const ctcAlice = alice.deploy(backend);
    console.log("Bob is connecting to the backend...");
    const ctcBob = bob.attach(backend, ctcAlice.getInfo());
    console.log("Carl is connecting to the backend...");
    const ctcCarl = carl.attach(backend, ctcAlice.getInfo());

    const Player = (Who) => ({
        ...stdlib.hasRandom,
        
    });

    await Promise.all([
        backend.Alice(ctcAlice), {
            ...stdlib.hasRandom,

        }
    ]);
});