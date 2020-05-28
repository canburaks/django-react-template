import graphene
from graphene_django.types import DjangoObjectType


class Query(graphene.ObjectType):
    sample = graphene.String()
 
    def resolve_sample(self, info, *_):
        # for large lists only query what you need
        return "Hello React"

 
schema = graphene.Schema(query=Query)