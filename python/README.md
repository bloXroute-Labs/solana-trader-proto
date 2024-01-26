# solana-trader-proto-python package

## Running

Install dependencies:
```shell
pip install -r requirements.txt
```

You should probably create a separate `virtualenv` for this, since this project
relies on a specific version of `betterproto`.

## Publishing

```shell
    python3 -m pip install --user --upgrade twine
```

upgrade the version in pyproject.toml

```shell
    make proto
    cd python
    rm -rf dist/ && python3 -m build 
```

you can install package locally before uploading it to the pypi

```shell
    pip install dist/bxsolana-trader-proto-<your version>.tar.gz
```

now, you can upload the artifact to pypi 

```shell
  python3 -m twine upload --repository pypi dist/*
```

## Issues
    if you encounter any issues related to the above python3 commands refer to this page for steps to setup your local machine 
    [https://packaging.python.org/en/latest/tutorials/packaging-projects/](https://packaging.python.org/en/latest/tutorials/packaging-projects/)