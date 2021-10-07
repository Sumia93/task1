const std = require('./data')
const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'Add degrees',
    builder: {
        std_id: {
            describe: 'This is a unique number for a student',
            demandOption: true,
            type: 'number'
        },
        std_name: {
            describe: 'This is a student name',
            demandOption: true,
            type: 'string'
        },
        std_subject: {
            describe: 'this is asubject that a student learn',
            demandOption: true,
            type: 'string'
        },
        std_degree: {
            describe: 'this adegree of subject',
            demandOption: true,
            type: 'number'
        },
        std_validate: {
            describe: 'this is adegree validation',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (argv) => {
        std.addStd(argv.std_id, argv.std_name, argv.std_subject, argv.std_degree, argv.std_validate)
    }
})
yargs.command({
    command: 'delete',
    describe: 'delete degrees',
    builder: {
        std_id: {
            describe: 'This is a unique number for a student',
            demandOption: true,
            type: 'number'
        },
        std_name: {
            describe: 'This is a student name',
            demandOption: true,
            type: 'string'
        },
        std_subject: {
            describe: 'this is asubject that a student learn',
            demandOption: true,
            type: 'string'
        },
        std_degree: {
            describe: 'this adegree of subject',
            demandOption: true,
            type: 'number'
        },
        std_validate: {
            describe: 'this is adegree validation',
            demandOption: false,
            type: 'string'

        }
    },
    handler: (argv) => {
        std.deleteStd(argv.std_id)
    }
})
yargs.command({
    command: 'read',
    describe: 'read degrees',
    builder: {
        std_id: {
            describe: 'This is a unique number for a student',
            demandOption: true,
            type: 'number'
        },
        std_name: {
            describe: 'This is a student name',
            demandOption: true,
            type: 'string'
        },
        std_subject: {
            describe: 'this is asubject that a student learn',
            demandOption: true,
            type: 'string'
        },
        std_degree: {
            describe: 'this adegree of subject',
            demandOption: true,
            type: 'number'
        },
        std_validate: {
            describe: 'this is adegree validation',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (argv) => {
        std.readItem(argv.std_id)
    }
})

yargs.command({
    command: 'list',
    describe: 'list degrees',
    builder: {
        std_id: {
            describe: 'This is a unique number for a student',
            demandOption: true,
            type: 'number'
        },
        std_name: {
            describe: 'This is a student name',
            demandOption: true,
            type: 'string'
        },
        std_subject: {
            describe: 'this is asubject that a student learn',
            demandOption: true,
            type: 'string'
        },
        std_degree: {
            describe: 'this adegree of subject',
            demandOption: true,
            type: 'number'
        },
        std_validate: {
            describe: 'this is adegree validation',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (argv) => {
        std.listStd()
    }
})
yargs.command({
    command: 'check',
    describe: 'check degrees',
    builder: {
        std_id: {
            describe: 'This is a unique number for a student',
            demandOption: true,
            type: 'number'
        },
        std_name: {
            describe: 'This is a student name',
            demandOption: true,
            type: 'string'
        },
        std_subject: {
            describe: 'this is asubject that a student learn',
            demandOption: true,
            type: 'string'
        },
        std_degree: {
            describe: 'this adegree of subject',
            demandOption: true,
            type: 'number'
        },
        std_validate: {
            describe: 'this is adegree validation',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (argv) => {
        std.check(argv.std_degree)
    }
})
yargs.parse()