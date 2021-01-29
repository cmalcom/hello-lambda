const stackConfig =  {
    repository: {
        token: `dd0ac9b4a45d96971cdfbb3ea68f4ea2acd56a81`
    },
    dev: {
        environmentLabel: 'Dev',
        s3: {
            versioned: false,
            encryption: false 
        },
        vpc: {
            cidr: "10.83.0.0/20",
            cidrMask: 24,
            setReserve: false
        },
        ec2: {
            machineImages: {
                'us-west-2': 'ami-0a36eb8fadc976275'
            }
        }
    },
    prd: {
        environmentLabel: 'Prd',
        s3: {
            removalPolicy: 'retain',
            versioned: true,
            encryption: true 
        },
        vpc: {
            cidr: "10.83.0.0/20",
            cidrMask: 24,
            setReserve: false
        },
        ec2: {
            machineImages: {
                'us-east-1': 'ami-0be2609ba883822ec'
            }
        }
    }        
};

module.exports = { stackConfig };