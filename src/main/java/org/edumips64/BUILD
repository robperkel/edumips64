# Build variables.
codename = "Nicolosi"
splash_img = "org/edumips64/ui/swing/img/splash.png"
version = "1.2.4"

manifest_lines = [
    "Codename: {}".format(codename),
    "SplashScreen-Image: {}".format(splash_img),
    "Signature-Version: {}".format(version),

    # Missing variables due to https://github.com/bazelbuild/bazel/issues/2009. Must be fixed before relying only
    # on Bazel.
    #"Build-Date: {}".format(CURRENT_TIME),
    #"Git-Revision: {}".format(git_revision),
]

# Main binary rule.
java_binary(
    name = "edumips64",
    main_class = "org.edumips64.Main",
    runtime_deps = ["main-lib"],
    deploy_manifest_lines = manifest_lines,
    stamp = 1,
)

java_library(
    name = "main-lib",
    srcs = ["Main.java"],
    deps = [
        "//src/main/java/org/edumips64/core:cpu",
        "//src/main/java/org/edumips64/core:dinero",
        "//src/main/java/org/edumips64/core:iomanager",
        "//src/main/java/org/edumips64/core:memory",
        "//src/main/java/org/edumips64/core:symboltable",
        "//src/main/java/org/edumips64/core/is",
        "//src/main/java/org/edumips64/core/is:instructionbuilder",
        "//src/main/java/org/edumips64/core/parser",
        "//src/main/java/org/edumips64/ui/swing",
        "//src/main/java/org/edumips64/ui/swing/img",
        "//src/main/java/org/edumips64/utils:config",
        "//src/main/java/org/edumips64/utils:currentlocale",
        "//src/main/java/org/edumips64/utils:cyclebuilder",
        "//src/main/java/org/edumips64/utils:javaprefsconfigstore",
        "//src/main/java/org/edumips64/utils:metainfo",
        "//src/main/java/org/edumips64/utils/io",
    ],
)