module.exports = {
    apps: [
        {
            name: "Server1",
            script: "./server.js",
            watch: true,
            env: {
                PORT: 8081
            },
            args: "-a 2 b 30",
            node_args: "--expose-gc"
        },
        {
            name: "Server2",
            script: "./server.js",
            watch: true,
            env: {
                PORT: 8082
            },
            args: "-a 2 b 30",
            node_args: "--expose-gc"
        },
        {
            name: "Server3",
            script: "./server.js",
            watch: true,
            env: {
                PORT: 8083
            },
            exec_mode: "cluster",
            instances: 2,
            args: "-a 2 b 30",
            node_args: "--harmony --expose-gc"
        }]
}
