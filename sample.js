
const welcome = {
    out: [['w1', 1], ['w2', 3]]
}

const allIntents = {
    'a1': {
        in: ['w1'],
        out: [
            ['a1', 1]
        ]
    },
    'a2': {
        in: ['a1'],
        out: [
            ['a2', 1]
        ]
    },
    'a3': {
        in: ['a2', 'w2'],
        out: [
            ['a3', 1]
        ]
    },
    'a3': {
        in: ['a2', 'w2'],
        out: [
            ['a3', 1]
        ]
    }
}

const activeCtx_0 = [['w1', 1], ['w2', 3]]; // welcome intent was selected -> welcome has added out ctx to actCtx

const activeCtx_1a = [['w1', 0], ['w2', 2], ['a1', 1]]; 

const activeCtx_1b = [['w2', 2], ['a1', 1]]; 

const activeCtx_2a = [['w2', 1], ['a1', 0], ['a2', 1]]; 

const activeCtx_2b = [['w2', 1], ['a2', 1]]; 